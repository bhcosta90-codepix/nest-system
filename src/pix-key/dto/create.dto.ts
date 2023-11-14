import {IsString, IsNotEmpty, IsUUID} from 'class-validator';

export class Create {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    bank: string;

    @IsString()
    @IsNotEmpty()
    kind: string;

    @IsString()
    key: string;
}