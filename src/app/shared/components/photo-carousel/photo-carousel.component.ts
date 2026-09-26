import { Component, HostListener, Input, signal } from '@angular/core';

const PAGE_SIZE = 4;

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  templateUrl: './photo-carousel.component.html',
})
export class PhotoCarouselComponent {
  @Input({ required: true }) images: string[] = [];
  @Input() title = '';

  page = signal(0);
  openAt = signal<number | null>(null);
  activeLightboxIndex = signal(0);

  get pageCount(): number {
    return Math.ceil(this.images.length / PAGE_SIZE);
  }

  get visible(): string[] {
    const start = this.page() * PAGE_SIZE;
    return this.images.slice(start, start + PAGE_SIZE);
  }

  get startIndex(): number {
    return this.page() * PAGE_SIZE;
  }

  get pageIndexes(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i);
  }

  prevPage(): void {
    this.page.update((p) => (p === 0 ? this.pageCount - 1 : p - 1));
  }

  nextPage(): void {
    this.page.update((p) => (p === this.pageCount - 1 ? 0 : p + 1));
  }

  goToPage(i: number): void {
    this.page.set(i);
  }

  openLightbox(index: number): void {
    this.openAt.set(index);
    this.activeLightboxIndex.set(index);
  }

  closeLightbox(): void {
    this.openAt.set(null);
  }

  prevPhoto(e: Event): void {
    e.stopPropagation();
    const total = this.images.length;
    this.activeLightboxIndex.update((a) => (a === 0 ? total - 1 : a - 1));
  }

  nextPhoto(e: Event): void {
    e.stopPropagation();
    const total = this.images.length;
    this.activeLightboxIndex.update((a) => (a === total - 1 ? 0 : a + 1));
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (this.openAt() === null) return;
    const total = this.images.length;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.activeLightboxIndex.update((a) => (a === 0 ? total - 1 : a - 1));
    if (e.key === 'ArrowRight') this.activeLightboxIndex.update((a) => (a === total - 1 ? 0 : a + 1));
  }
}
