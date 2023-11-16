import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'transaction' })
export class TransactionModel {
  @PrimaryColumn('uuid')
  id: string;

  @PrimaryColumn('uuid')
  reference: string;

  @Column({ type: 'uuid' })
  bank: string;

  @Column({ type: 'tinyint' })
  kind: number;

  @Column({ length: 150 })
  key: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'double', unsigned: true, precision: 3 })
  value: number;

  @Column({ type: 'tinyint', unsigned: true })
  status: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: number;
}
