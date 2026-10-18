export type HealthFactorZone = 'safe' | 'at-risk' | 'liquidation';

export interface HealthFactorZoneConfig {
  zone: HealthFactorZone;
  label: string;
  description: string;
  color: string;
  min: number;
  max: number;
}

export const HEALTH_FACTOR_ZONES: HealthFactorZoneConfig[] = [
  {
    zone: 'liquidation',
    label: 'Liquidation',
    description: 'Health factor below 1.0 — the loan is eligible for liquidation.',
    color: '#ef4444',
    min: 0,
    max: 1,
  },
  {
    zone: 'at-risk',
    label: 'At Risk',
    description: 'Health factor between 1.0 and 1.5 — close to the liquidation threshold.',
    color: '#f59e0b',
    min: 1,
    max: 1.5,
  },
  {
    zone: 'safe',
    label: 'Safe',
    description: 'Health factor at or above 1.5 — the loan is comfortably collateralized.',
    color: '#22c55e',
    min: 1.5,
    max: 3,
  },
];

export const HEALTH_FACTOR_MAX = 3;

export function getHealthFactorZone(healthFactor: number): HealthFactorZoneConfig {
  if (healthFactor < 1) {
    return HEALTH_FACTOR_ZONES[0];
  }
  if (healthFactor < 1.5) {
    return HEALTH_FACTOR_ZONES[1];
  }
  return HEALTH_FACTOR_ZONES[2];
}

export interface Loan {
  id: string;
  borrower: string;
  principal: number;
  collateral: number;
  healthFactor: number;
  interestRate: number;
  status: 'active' | 'repaid' | 'liquidated';
  createdAt: string;
  dueDate: string;
}
