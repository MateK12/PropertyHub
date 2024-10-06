import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { jsPDF } from "jspdf";

pdfMake.vfs = pdfFonts
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  form: any;
  leases: Array<string> = [];
  info: any;
  constructor(private receiptService: LoginServiceService, private fb: FormBuilder) { }
  ngOnInit(): void {

    this.createForm();
    // this.receiptService.GetLeases(localStorage.getItem('userID')).subscribe({
    //   next: response => {
    //     for (let i = 0; i < response.length; i++) {
    //       this.leases.push(response[i].addres);

    //     }
    //   }
    // })
  }

  showModal(): void {
    setTimeout(() => {
      this.info = JSON.parse(localStorage.getItem('receiptData'));
      this.form.patchValue(this.info)
      this.isVisible = true;
    }, 500)

  }



  handleCancel(): void {
    this.isVisible = false;
  }
  private createForm() {
    this.form = this.fb.group({

      tenant: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      owner: [null, [Validators.required]],
      period: [null, [Validators.required]],
      paidAmount: [null, [Validators.required]],
      addres: [null],
    });
  }
  OnChangeModel() {
    let data = this.form.getRawValue();
    if (data.paidAmount == data.amount) {
      console.log('fadsfads');

      this.form.patchValue({ paidAmount: 0 })
    } else {
      this.form.patchValue({ paidAmount: data.amount })
    }
  }
  OnCreatePdf() {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
    this.info = this.form.getRawValue();
    const doc = new jsPDF();
    var content = "Para locatario";

    // Set font size and style
    doc.setFontSize(12);
    doc.setFont("times", "normal");

    // Add text to the PDF
    doc.text(content, 80, 20);

    // Add separator line
    doc.line(10, 30, 200, 30);

    let formatedMonth = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(this.info.period);
    let formatedYear = this.info.period.getFullYear();
    console.log(formatedMonth);
    console.log(formatedYear);
    doc.text(`Recibi del Sr/a.: ${this.info.tenant} la suma de PESOS $${this.info.amount} en concepto
     de cobro de alquiler correspondiente al periodo de ${formatedMonth} ${formatedYear} 
     por el inmueble ubicado en ${this.info.addres}`, 10, 40);


    doc.line(10, 80, 200, 80);

    // Add total, pagado, and resta information
    doc.text(`Total a pagar: $${this.info.amount}`, 10, 90);
    doc.text(`Pagado: $${this.info.paidAmount}`, 10, 100);

    let leftToPay = this.info.amount - this.info.paidAmount;
    doc.text(`Resta: $${0}`, 10, 110);

    // Add signature and clarification


    doc.line(10, 135, 200, 135);

    doc.text("Firma y aclaracion", 10, 140);

    // Save the PDF with a specific name
    doc.save("example.pdf");
  }

}
