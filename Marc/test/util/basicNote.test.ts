import BasicNote from '../../util/Notes/BasicNote';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Basic Note', () => {
  it('Should create a basic note', (done) => {
    let note = new BasicNote('Bob', 'Ed');

    expect(note.type).to.equal('basicNote');
    expect(note.front).to.equal('Bob');
    expect(note.back).to.equal('Ed');
    done();
  });
});
