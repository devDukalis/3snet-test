export type MonthData = {
  income: number;
  activePartners: number;
  plan: { income: number; activePartners: number };
  fact: { income: number; activePartners: number };
} | null;

export type Manager = {
  id: number;
  adminId: number;
  adminName: string;
  months: MonthData[];
  year: number;
};

export type ApiResponse = {
  success: boolean;
  data: {
    total: {
      plan: { income: number; activePartners: number };
      fact: { income: number; activePartners: number };
    }[];
    table: Manager[];
  };
};
