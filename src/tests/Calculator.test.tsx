import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Calculator } from '../components/Calculator';

it('Checks if Item and build box are in the document', () => {
  render(<Calculator />);
  const itemEl = screen.getByTitle('item');
  const boxEl = screen.getByTitle('build');
  expect(itemEl).toBeInTheDocument();
  expect(boxEl).toBeInTheDocument();
});

describe('Mode switch', () => {

  describe('by default', () => {

    it('renders constructor image visible', () => {
      render(<Calculator />);
      expect(screen.getByAltText(/Constructor/)).toBeVisible();
    });

    it('renders calculator image not visible', () => {
      render(<Calculator />);
      expect(screen.getByAltText(/Calculator/)).not.toBeVisible();
    });

    describe('buttons', () => {

      it('has draggable attribute', () => {
        render(<Calculator />);
        screen.getAllByTitle(/Button/).forEach( element =>
            expect(element).toHaveAttribute('draggable', 'true')
          );
      });

      it('has no onClick attribute', () => {
        render(<Calculator />);
        screen.getAllByTitle(/Button/).forEach( element =>
            expect(element).not.toHaveAttribute('onClick')
          );
      });

      it('do not change result output', async () => {
        render(<Calculator />);
        screen.getAllByTitle(/Button/).forEach( async (element) => {
          await userEvent.click(element);
          expect(screen.getByTitle('Calculator Result Output')).toHaveValue('0');
        });
      });

    });
  });


  describe('after clicking', () => {

    it('renders calculator image visible', async () => {
      const user = userEvent.setup()
      render(<Calculator />);
      const modeSwitchEl = screen.getByTitle('Mode Switcher');
      await user.click(modeSwitchEl);
      expect(screen.getByAltText(/Calculator/)).toBeVisible();
    });

    it('renders constructor image NOT visible', async () => {
      const user = userEvent.setup()
      render(<Calculator />);
      const modeSwitchEl = screen.getByTitle('Mode Switcher');
      await user.click(modeSwitchEl);
      expect(screen.getByAltText(/Constructor/)).not.toBeVisible();
    });

  });
});