import { Component, OnInit, Input } from '@angular/core';
import { animals, colors } from './constants'

@Component({
  selector: 'Animal',
  templateUrl: './angular-animals.component.html',
  styleUrls: ['./angular-animals.component.scss']
})
export class AngularAnimalsComponent implements OnInit {

  @Input()
  public name:string;
  @Input()
  public color:string;
  @Input()
  public size:string;
  @Input()
  public rounded:boolean = false;
  @Input()
  public square:boolean = false;
  @Input()
  public circle:boolean = true;
  @Input()
  public dance:boolean = false;

  public avatarName = "";
  public avatarImage = "";
  public avatarColor = "";
  public avatarSize = "";ʻ

  public avatarStyle:{
    "--a-bg-color": string,
    "--a-size": string,
    "--a-border-radius": string
  };

  public conditionalClass:"v-animal-image v-animal-dance" | "v-animal-image";


  constructor() {

  }

  ngOnInit() {
    this.avatarName = this.validateName();
    this.avatarImage = this.getAvatar(this.avatarName)
    this.avatarColor = this.validateColor();
    this.avatarSize = this.validateSize();

    this.avatarStyle = {
      "--a-bg-color": this.avatarColor,
      "--a-size": this.avatarSize,
      "--a-border-radius": this.borderRadius()
    };

    this.conditionalClass = this.dance ? "v-animal-image v-animal-dance" : "v-animal-image";
  }


  protected validateName():string {
    if (this.name) {
      const lower:string = this.name.toLowerCase();
      if (animals.includes(lower)) {
        return lower;
      }
      console.error(
        `InvalidAnimal: '${this.name}' is not a valid animal name. Using random animal instead.`
      );
    }
    return animals[Math.random() * animals.length << 0];
  }

  protected getAvatar(avatarName:string):string {
    return `/animals/${avatarName}.png`;
  }

  protected validateColor = () => {
    if (this.color) {
      const lower:string = this.color.toLowerCase();
      if (lower in colors) {
        return colors[lower];
      } else if (lower === "none") {
        return "transparent";
      } else if (/^#[0-9A-F]{6}$/i.test(lower)) {
        return lower;
      } else {
        console.error(
          `InvalidColor: '${this.color}' is not a valid color. Using random color instead.`
        );
      }
    }
    const keys = Object.keys(colors);
    return colors[keys[(keys.length * Math.random()) << 0]];
  }

  protected validateSize():string {
    if (this.size) {
      if (
        this.size.match(
          /(^\d*)(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)/
        )
      ) {
        return this.size;
      } else {
        console.error(`InvalidSize: '${this.size}' is not a valid CSS width property. Using '70px' instead.`);
      }
    }
    return "70px";
  }

  protected borderRadius():string {
    if (this.rounded) {
      return "10%";
    } else if (this.square) {
      return "0px";
    }
    return "50%";
  }
}
