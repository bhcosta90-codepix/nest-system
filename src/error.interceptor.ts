import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UseCase } from 'ts-package-system/infra/use-cases/pix-key/create.use-case';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof UseCase.UseCaseException) {
          throw new HttpException(
            error.message,
            HttpStatus.BAD_REQUEST,
          );
        }

        throw error;
      }),
    );
  }
}
