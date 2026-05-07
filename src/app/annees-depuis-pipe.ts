import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'anneeDepuis',
standalone: true
})
export class AnneeDepuisPipe implements PipeTransform {
transform(annee: number): string {
const diff = new Date().getFullYear() - annee;
if (diff === 0) return 'Publié cette année';
if (diff === 1) return 'Publié il y a 1 an';
return `Publié il y a ${diff} ans`;
}
}
