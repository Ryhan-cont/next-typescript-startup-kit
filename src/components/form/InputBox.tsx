// 'use client'

import React, { ReactNode, Children } from 'react';

interface Props {
  children?: ReactNode;
}

interface ChildProps {
  children?: ReactNode;
}

const InputBox: React.FC<Props> & {Left: React.FC<ChildProps>; Right: React.FC<ChildProps>} = ({ children }) => {

  let leftSlot, rightSlot = null
  console.log(Children)
  Children.map(children, (child) => {
    if(React.isValidElement(child)) {
      console.log(child)
        if(child.type.name == 'Left'){
          leftSlot = child;
        }
        if(child.type.name == 'Right'){
          rightSlot = child;
        }
    }
  });

  return (
    <div className='flex'>
      {leftSlot ? leftSlot : ''}
      <input />
      {rightSlot ? rightSlot : ''}
    </div>
  )
};

const Left: React.FC<ChildProps> = ({ children }) => <div>{children}</div>;
const Right: React.FC<ChildProps> = ({ children }) => <div>{children}</div>;

InputBox.Left = Left;
InputBox.Right = Right;

export default InputBox;
  