import { ButtonList } from "../../types/buttonList-types";

export const buttonList: ButtonList = [
  {
    id: 'result',
    size: '4x1',
    position: { top: 1, left: 1 },
    type: 'result',
    action: 'none'
  },
  {
    id: 'percent',
    size: '1x1',
    position: { top: 16.67, left: 1 },
    type: 'special',
    action: '%'
  },
  {
    id: 'pow',
    size: '1x1',
    position: { top: 16.67, left: 20 },
    type: 'special',
    action: 'pow'
  },
  {
    id: 'sqrt',
    size: '1x1',
    position: { top: 16.67, left: 40 },
    type: 'special',
    action: 'sqrt'
  },
  {
    id: 'reset',
    size: '1x1',
    position: { top: 16.67, left: 60 },
    type: 'reset',
    action: 'reset'
  },
  {
    id: 'bkspc',
    size: '1x1',
    position: { top: 16.67, left: 80 },
    type: 'number',
    action: 'bkspc'
  },
  {
    id: 'seven',
    size: '1x1',
    position: { top: 33.34, left: 1 },
    type: 'number',
    action: '7'
  },
  {
    id: 'eight',
    size: '1x1',
    position: { top: 33.34, left: 20 },
    type: 'number',
    action: '8'
  },
  {
    id: 'nine',
    size: '1x1',
    position: { top: 33.34, left: 40 },
    type: 'number',
    action: '9'
  },
  {
    id: 'minus',
    size: '1x1',
    position: { top: 33.34, left: 60 },
    type: 'action',
    action: '-'
  },
  {
    id: 'plus',
    size: '1x2',
    position: { top: 33.34, left: 80 },
    type: 'action',
    action: '+'
  },
  {
    id: 'four',
    size: '1x1',
    position: { top: 50, left: 1 },
    type: 'number',
    action: '4'
  },
  {
    id: 'five',
    size: '1x1',
    position: { top: 50, left: 20 },
    type: 'number',
    action: '5'
  },
  {
    id: 'six',
    size: '1x1',
    position: { top: 50, left: 40 },
    type: 'number',
    action: '6'
  },
  {
    id: 'divide',
    size: '1x1',
    position: { top: 50, left: 60 },
    type: 'action',
    action: '/'
  },
  {
    id: 'one',
    size: '1x1',
    position: { top: 66.67, left: 1 },
    type: 'number',
    action: '1'
  },
  {
    id: 'two',
    size: '1x1',
    position: { top: 66.67, left: 20 },
    type: 'number',
    action: '2'
  },
  {
    id: 'three',
    size: '1x1',
    position: { top: 66.67, left: 40 },
    type: 'number',
    action: '3'
  },
  {
    id: 'multiply',
    size: '1x1',
    position: { top: 66.67, left: 60 },
    type: 'action',
    action: '*'
  },
  {
    id: 'equals',
    size: '1x2',
    position: { top: 66.67, left: 80 },
    type: 'action',
    action: '='
  },
  {
    id: 'zero',
    size: '2x1',
    position: { top: 83.34, left: 1 },
    type: 'number',
    action: '0'
  },
  {
    id: 'dot',
    size: '1x1',
    position: { top: 83.34, left: 40 },
    type: 'number',
    action: '.'
  },
  {
    id: 'negate',
    size: '1x1',
    position: { top: 83.34, left: 60 },
    type: 'number',
    action: '±'
  },
]