import * as React from 'react'
import styled from 'styled-components'
import { INode, REACT_FLOW_CHART } from '../../src'

const Outer = styled.div`
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export interface ISidebarItemProps {
  type: string,
  ports: INode['ports'],
  properties?: any,
  imageSrc?: string,
}

export const SidebarItem = ({ type, ports, properties, imageSrc }: ISidebarItemProps) => {
  return (
    <Outer
      draggable={true}
      onDragStart={(event) => {
        const data = {
          type,
          ports,
          properties,
          imageSrc,
        };
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify(data));
      }}
    >
      {imageSrc && <ItemImage src={imageSrc} alt={type} />}
      {type}
    </Outer>
  )
}
