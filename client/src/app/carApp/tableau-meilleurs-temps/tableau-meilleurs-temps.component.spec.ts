import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TableauMeilleursTempsComponent } from "./tableau-meilleurs-temps.component";
import { GestionnaireBDCourse } from "../baseDeDonnee/GestionnaireBDCourse";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatDivider } from "@angular/material/divider";

describe("TableauMeilleursTempsComponent", () => {
  let component: TableauMeilleursTempsComponent;
  let fixture: ComponentFixture<TableauMeilleursTempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TableauMeilleursTempsComponent, MatDivider ],
      providers: [ GestionnaireBDCourse ]
    })
    .compileComponents().catch();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauMeilleursTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
