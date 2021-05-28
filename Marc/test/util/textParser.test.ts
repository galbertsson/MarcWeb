import { describe } from 'mocha';
import { expect } from 'chai';
import { textParser } from '../../util/textParser';
import BasicNote from '../../util/BasicNote';
import ClozeNote from '../../util/ClozeNote';

describe('Text parser', () => {
  it('Basic Note', () => {
    let input = 'Bob - Ed';

    expect(textParser(input, ' - ')).to.deep.equal([new BasicNote('Bob', 'Ed')]);
  });

  it('Cloze Note', () => {
    let input = '[a::Hello] Bob';

    expect(textParser(input, ' - ')).to.deep.equal([new ClozeNote('[a::Hello] Bob')]);
  });

  it('Multiple Basic Notes', () => {
    let input = 'Bob - Ed\nYes - No';

    expect(textParser(input, ' - ')).to.deep.equal([new BasicNote('Bob', 'Ed'), new BasicNote('Yes', 'No')]);
  });

  it('Multiple Cloze Notes', () => {
    let input = '[a::Hello] Bob\n[a::Hello], what is [b::hej]';

    expect(textParser(input, ' - ')).to.deep.equal([
      new ClozeNote('[a::Hello] Bob'),
      new ClozeNote('[a::Hello], what is [b::hej]'),
    ]);
  });

  it('Multiple Mixed Notes', () => {
    let input = 'Bob - Ed\nYes - No\n[a::Hello] Bob\n[a::Hello], what is [b::hej]';

    expect(textParser(input, ' - ')).to.deep.equal([
      new BasicNote('Bob', 'Ed'),
      new BasicNote('Yes', 'No'),
      new ClozeNote('[a::Hello] Bob'),
      new ClozeNote('[a::Hello], what is [b::hej]'),
    ]);
  });
});
