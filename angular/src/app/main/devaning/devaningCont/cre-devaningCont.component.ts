import { Component, EventEmitter, Inject, Injector, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { CreateOrEditDevaningContModuleDto, DevaningContModuleServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';


@Component({
    selector: 'cre-devaningCont',
    templateUrl: './cre-devaningCont.component.html',
    styleUrls: ['./cre-devaningCont.component.less']
})
export class CreateEditDvnContComponent extends AppComponentBase {
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();


    active: boolean = false;
    saving: boolean = false;
    rowdata: CreateOrEditDevaningContModuleDto = new CreateOrEditDevaningContModuleDto();

    constructor(
        public bsModalRef: BsModalRef,
        private injector: Injector,
        private _service: DevaningContModuleServiceProxy,
    ) {
        super(injector);
    }

    ngOnInit() { }

    ngAfterViewInit() {
        const modalElement = document.querySelector('.modal-dialog');
        modalElement.classList.add('.modal-lg')
    }
    save(): void {
        this.saving = true;
        //this.rowdata.isActive = (this._isActive == true) ? 'Y' : 'N'
        this._service.createOrEdit(this.rowdata)
            .pipe(finalize(() => this.saving = false))
            .subscribe(() => {
                this.notify.info(this.l('Saved Successfully'));
                this.bsModalRef.hide();
                this.modalSave.emit(this.rowdata);
            });
        this.saving = false;
    }
    closeModal(): void {
        this.bsModalRef.hide();
    }


}
