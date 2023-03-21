import { ButtonList } from "../../types/buttonList-types";

export const buttonList: ButtonList = [
  {
    id: 'result',
    size: '4x1',
    position: { top: 2, left: 2 },
    type: 'result',
    action: 'none'
  },
  {
    id: 'percent',
    size: '1x1',
    position: { top: 18.33, left: 2 },
    type: 'special',
    action: '%'
  },
  {
    id: 'pow',
    size: '1x1',
    position: { top: 18.33, left: 21.6 },
    type: 'special',
    action: 'pow'
  },
  {
    id: 'sqrt',
    size: '1x1',
    position: { top: 18.33, left: 41.2 },
    type: 'special',
    action: 'sqrt'
  },
  {
    id: 'reset',
    size: '1x1',
    position: { top: 18.33, left: 60.8 },
    type: 'reset',
    action: 'reset'
  },
  {
    id: 'bkspc',
    size: '1x1',
    position: { top: 18.33, left: 80.4 },
    type: 'number',
    action: 'bkspc'
  },
  {
    id: 'seven',
    size: '1x1',
    position: { top: 34.66, left: 2 },
    type: 'number',
    action: '7'
  },
  {
    id: 'eight',
    size: '1x1',
    position: { top: 34.66, left: 21.6 },
    type: 'number',
    action: '8'
  },
  {
    id: 'nine',
    size: '1x1',
    position: { top: 34.66, left: 41.2 },
    type: 'number',
    action: '9'
  },
  {
    id: 'minus',
    size: '1x1',
    position: { top: 34.66, left: 60.8 },
    type: 'action',
    action: '-'
  },
  {
    id: 'plus',
    size: '1x2',
    position: { top: 34.66, left: 80.4 },
    type: 'action',
    action: '+'
  },
  {
    id: 'four',
    size: '1x1',
    position: { top: 50.99, left: 2 },
    type: 'number',
    action: '4'
  },
  {
    id: 'five',
    size: '1x1',
    position: { top: 50.99, left: 21.6 },
    type: 'number',
    action: '5'
  },
  {
    id: 'six',
    size: '1x1',
    position: { top: 50.99, left: 41.2 },
    type: 'number',
    action: '6'
  },
  {
    id: 'divide',
    size: '1x1',
    position: { top: 50.99, left: 60.8 },
    type: 'action',
    action: '/'
  },
  {
    id: 'one',
    size: '1x1',
    position: { top: 67.32, left: 2 },
    type: 'number',
    action: '1'
  },
  {
    id: 'two',
    size: '1x1',
    position: { top: 67.32, left: 21.6 },
    type: 'number',
    action: '2'
  },
  {
    id: 'three',
    size: '1x1',
    position: { top: 67.32, left: 41.4 },
    type: 'number',
    action: '3'
  },
  {
    id: 'multiply',
    size: '1x1',
    position: { top: 67.32, left: 60.8 },
    type: 'action',
    action: '*'
  },
  {
    id: 'equals',
    size: '1x2',
    position: { top: 67.32, left: 80.4 },
    type: 'action',
    action: '='
  },
  {
    id: 'zero',
    size: '2x1',
    position: { top: 83.65, left: 2 },
    type: 'number',
    action: '0'
  },
  {
    id: 'dot',
    size: '1x1',
    position: { top: 83.65, left: 41.2 },
    type: 'number',
    action: '.'
  },
  {
    id: 'negate',
    size: '1x1',
    position: { top: 83.65, left: 60.8 },
    type: 'number',
    action: '±'
  },
]