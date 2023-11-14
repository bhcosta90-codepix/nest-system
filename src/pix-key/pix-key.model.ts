import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({name: 'pix_keys'})
export class PixKeyModel {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  bank: string;

  @Column({ type: 'tinyint' })
  kind: number;

  @Column({ length: 150 })
  key: string;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  created_at: string;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  updated_at: number;
}