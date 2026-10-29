export type SchoolContact = {
  id: string;
  name: string;
  phone?: string;
  whatsapp?: string; // Número oficial com código do país e DDD, somente dígitos.
};

// Preencher com a lista oficial validada. Não exibir contatos ou escolas fictícios.
export const schools: SchoolContact[] = [];
