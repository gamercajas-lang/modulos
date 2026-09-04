import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCultivoWikiDto } from './create-tipo-cultivo-wiki.dto';

export class UpdateTipoCultivoWikiDto extends PartialType(CreateTipoCultivoWikiDto) {}
