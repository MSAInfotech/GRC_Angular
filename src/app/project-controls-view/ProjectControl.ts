export interface ProjectControl {
    applicable: boolean;
    controlId: string;
    name: string;
    description: string;
    status: string;
    automation: string;
    responsible: string;
    approver: string;
    deadline: Date;
    frequency: string;
    linkedRisk: string;
  }