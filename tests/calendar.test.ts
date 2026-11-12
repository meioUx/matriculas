import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calendars, calendarStatus } from '../src/calendar.ts';

test('all calendar options have their official periods', () => {
 assert.deepEqual(calendars.map(c => [c.id,c.enrollment.start,c.enrollment.end]), [
 ['infantil','2026-11-03','2026-11-12'],['fundamental','2026-11-23','2026-12-01'],
 ['maternal','2026-11-16','2026-11-19'],['jardim-i-ii','2026-11-03','2026-11-12'],
 ['jardim','2026-11-23','2026-11-25'],
 ['sexto','2026-12-02','2026-12-03'],['integral','2026-10-26','2026-11-03']]);
});
test('deadline includes the last day and observes Sao Paulo time at midnight', () => {
 const p=calendars[0].enrollment;
 assert.equal(calendarStatus(p,new Date('2026-11-03T02:59:59Z')),'upcoming');
 assert.equal(calendarStatus(p,new Date('2026-11-03T03:00:00Z')),'open');
 assert.equal(calendarStatus(p,new Date('2026-11-13T02:59:59Z')),'open');
 assert.equal(calendarStatus(p,new Date('2026-11-13T03:00:00Z')),'closed');
});
test('correction dates differ from enrollment dates and cross months', () => {
 assert.equal(calendars.find(c=>c.id==='jardim')?.corrections,'02 e 03 de dezembro');
 assert.equal(calendars.find(c=>c.id==='sexto')?.corrections,'07 e 08 de dezembro');
 assert.equal(calendars.find(c=>c.id==='integral')?.corrections,undefined);
});

test('revised review, correction and result dates', () => {
 for (const id of ['infantil', 'jardim-i-ii']) {
  const c = calendars.find(c => c.id === id)!;
  assert.equal(c.analysis, '23 de novembro');
  assert.equal(c.corrections, '24 e 25 de novembro');
 }
 const c = calendars.find(c => c.id === 'fundamental')!;
 assert.equal(c.analysis, '02 a 04 de dezembro');
 assert.equal(c.corrections, '07 e 08 de dezembro');
 assert.equal(calendars.find(c => c.id === 'integral')?.result, '23 de novembro');
});
