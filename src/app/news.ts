export class News {

  constructor(
    public title?: string,
    public content?: string,
    public media?: string,
    public author?: string,
    public url?: string,
    public dateCreated?: Date,
    public dateAdded?: Date,
    public type?: string,
    public source?: string
  ) {  }

}
