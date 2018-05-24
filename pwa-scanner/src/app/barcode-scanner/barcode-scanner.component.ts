import { Component, OnInit, ViewChild, OnDestroy, AfterContentInit } from '@angular/core';
import { BarcodeDecoderService } from '../../services/barcode-decoder.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements OnInit, OnDestroy, AfterContentInit {

  lastResult: any;
  message: any;
  error: any;

  code$ = new Subject<any>();

  @ViewChild('interactive') interactive;

  constructor(private decoderService: BarcodeDecoderService) {}

  ngOnInit() {

    this.decoderService.onLiveStreamInit();
    this.decoderService.onDecodeProcessed();

    this.decoderService
      .onDecodeDetected()
      .then(code => {
        this.lastResult = code;
        this.decoderService.onPlaySound();
        this.code$.next(code);
      })
      .catch((err) => this.error = `Something Wrong: ${err}`);
  }

  ngAfterContentInit() {
    this.interactive.nativeElement.children[0].style.position = 'absolute';
  }

  ngOnDestroy() {
    this.decoderService.onDecodeStop();
  }


}
