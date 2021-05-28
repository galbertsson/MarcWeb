import { describe } from 'mocha';
import { expect } from 'chai';
import ClozeNote from '../../util/ClozeNote';

describe('Cloze note tests', () => {
  it('Cloze Note', (done) => {
    let note = new ClozeNote('[[a::Hello]] Bob');

    expect(note.type).to.equal('clozeNote');
    expect(note.text).to.equal('[[a::Hello]] Bob');
    expect(note.generateCards().length).to.equal(1);
    done();
  });

  it('Create Cloze Notes', (done) => {
    const text1 = "cloze notes [[1::aren't]] cool";
    const clozeNote = new ClozeNote(text1);
    expect(clozeNote.text).to.equal(text1);
    expect(clozeNote.generateCards().length).to.equal(1);

    const text2 = '[[1::basicnotes]] are old, [[2::clozes]] is the new [[1::orange]]';
    const clozeNote2 = new ClozeNote(text2);
    expect(clozeNote2.generateCards().length).to.equal(2);
    done();
  });

  it('Multiple hidden with different key', (done) => {
    const note = new ClozeNote('[[a::Ed]] Hello [[b::Bob]]');

    const cards = note.generateCards();

    expect(cards.length).to.equal(2);
    expect(cards[1].front).to.equal('Ed Hello [..]');
    expect(cards[0].front).to.equal('[..] Hello Bob');
    expect(cards[0].back).to.equal('Ed Hello Bob');
    expect(cards[1].back).to.equal('Ed Hello Bob');
    done();
  });

  it('Multiple hidden with same key', (done) => {
    const clozeNote = new ClozeNote('[[a::Ed]] Hello [[a::Bob]]');

    const cards = clozeNote.generateCards();
    expect(cards.length).to.equal(1);
    expect(cards[0].front).to.equal('[..] Hello [..]');
    done();
  });

  it('Invalid note syntax', (done) => {
    const clozeNote = new ClozeNote('Hello [[a::Bob]');
    const cards = clozeNote.generateCards();

    expect(cards.length).to.equal(0);
    done();
  });

  it('Note with special character', (done) => {
    const clozeNote = new ClozeNote('Hello [[a::Bo]b]]');
    const cards = clozeNote.generateCards();

    expect(cards.length).to.equal(1);

    expect(cards[0].front).to.equal('Hello [..]');
    expect(cards[0].back).to.equal('Hello Bo]b');
    done();
  });

  it('AddWithDoubleClosing', (done) => {
    const clozeNote = new ClozeNote('Hello [[a::Bo]] b]]');

    const cards = clozeNote.generateCards();
    expect(cards.length).to.equal(1);
    expect(cards[0].front).to.equal('Hello [..] b]]');
    expect(cards[0].back).to.equal('Hello Bo b]]');
    done();
  });
});
