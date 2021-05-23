class ClozeNote {
  text: string;
  type: 'clozeNote' = 'clozeNote';

  constructor(text: string) {
    this.text = text;
  }

  private generateCensuredFront(words: string[], censuredWords: number[]) {
    const wordsCopy = [...words];

    for (const wordIndex of censuredWords) {
      wordsCopy[wordIndex] = '[..]';
    }

    return wordsCopy.join(' ');
  }

  // Ported code from old project
  generateCards() {
    const words: string[] = this.text.split(' ');
    const cardMap: Record<string, number[]> = {};

    //Find deletions
    for (let i = 0; i < words.length; i++) {
      //Regex to look for the special cloze syntax
      if (new RegExp('\\Q[[\\E(.*)\\Q::\\E(.*)\\Q]]\\E').test(words[i])) {
        const removalKey = words[i].substring(2, words[i].indexOf('::'));
        const textToShow = words[i].substring(words[i].indexOf('::') + 2, words[i].indexOf(']]'));

        words[i] = textToShow;

        //Add mapping
        if (cardMap[removalKey] == null) {
          cardMap[removalKey] = [];
        }
        cardMap[removalKey].push(i);
      }
    }

    // cards = new Card[cardMap.keySet().size()];
    const cards: { front: string; back: string }[] = [];
    let cardIndex = 0;

    //Enumerate the deletions
    for (const key of Object.keys(cardMap).sort()) {
      //Add a card for each deletion index

      cards.push({ front: this.generateCensuredFront(words, cardMap[key]), back: words.join(' ') }); // new Card(ArrayToCloze(words, cardMap.get(key)), ArrayToString(words));
      cardIndex++;
    }

    return cards;
  }
}

export default ClozeNote;
