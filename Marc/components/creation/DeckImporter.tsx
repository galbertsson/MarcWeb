import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';
import Deck from '../../util/Deck';
import { textParser } from '../../util/textParser';

interface DeckImporterProps {
  open: boolean;
  onClose: () => void;
  onParse: (notes: Deck['notes']) => void;
}

const DeckImporter = (props: DeckImporterProps) => {
  const { open, onClose, onParse } = props;
  const [text, setText] = useState('');

  const onImport = () => {
    onParse(textParser(text, '-'));
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>
        <TextField
          fullWidth
          rows={15}
          value={text}
          onChange={(event) => setText(event.target.value)}
          multiline
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onImport}>Import</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeckImporter;
