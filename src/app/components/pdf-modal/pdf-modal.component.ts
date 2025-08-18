import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { PdfViewerModule } from "ng2-pdf-viewer";
import { DraggableContentDirective } from '../../directives/draggable-content.directive';

@Component({
  selector: 'clp-pdf-modal',
  imports: [PdfViewerModule, DraggableContentDirective],
  templateUrl: './pdf-modal.component.html',
  styleUrl: './pdf-modal.component.scss'
})
export class PdfModalComponent implements OnDestroy, OnChanges {
  @Input() pdfUrl?: string;
  @Input() showModal: boolean = false;
  @Output() showModalChange = new EventEmitter<boolean>();

  @Output() close = new EventEmitter<void>();

  zoom: number = 0.6;
  minZoom: number = 0.6;
  maxZoom: number = 2;

  ngOnDestroy (): void {
    this.enableScroll(); // Ensure scroll is re-enabled when component is destroyed
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['showModal'] && changes['showModal'] !== null && changes['showModal'].currentValue !== undefined) {
      if (this.showModal) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  }

  disableScroll () {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }

  enableScroll () {
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }

  dismiss () {
    this.close.emit();
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
    this.enableScroll(); // Re-enable scrolling when modal is dismissed
  }

  zoomOut () {
    if (this.zoom <= this.minZoom)
      return;
    this.zoom -= 0.1;
  }

  zoomIn () {
    if (this.zoom >= this.maxZoom)
      return;
    this.zoom += 0.1;
  }

  downloadPdf () {
    const url = this.pdfUrl; // your PDF link

    fetch(url as any, { mode: 'cors' }) // ensure CORS is allowed
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        // force it to be PDF type
        const file = new Blob([blob], { type: 'application/pdf' });
        const blobUrl = window.URL.createObjectURL(file);

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'document.pdf'; // filename
        document.body.appendChild(a); // Firefox fix
        a.click();
        a.remove();

        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('PDF download failed:', error);
      });
  }
}
