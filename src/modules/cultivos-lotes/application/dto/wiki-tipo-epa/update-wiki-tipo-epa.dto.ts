import { PartialType } from '@nestjs/mapped-types';
import { CreateWikiTipoEpaDto } from './create-wiki-tipo-epa.dto';

export class UpdateWikiTipoEpaDto extends PartialType(CreateWikiTipoEpaDto) {}
