class BasicNote {
  type: 'basicNote' = 'basicNote'; // TODO: The type looks strange
  front: string;
  back: string;

  constructor(front: string, back: string) {
    this.front = front;
    this.back = back;
  }

  generateCards() {
    return [{ front: this.front, back: this.back }];
  }
}

export default BasicNote;
