

export interface ReqResult {
    amount: number;
    base:   string;
    date:   Date;
    rates: {
        [key: string]: number; // Propiedades dinámicas para diferentes tipos de cambio
      };
}

