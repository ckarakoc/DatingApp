import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from "../../_services/member.service";
import { Member } from "../../_models/member";
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    MemberCardComponent
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  private memberService = inject(MemberService);
  members: Member[] = []

    ngOnInit(): void {
        this.loadMembers();
    }

    loadMembers() {
      this.memberService.getMembers().subscribe({
        next: members => this.members = members
      })
    }
}
