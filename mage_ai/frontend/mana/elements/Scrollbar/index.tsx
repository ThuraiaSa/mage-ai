import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import scrollbars, { InnerStyled, ScrollbarsStyledProps } from '../../styles/scrollbars';

type ScrollbarProps = {
  autoHorizontalPadding?: boolean;
  className?: string;
  children?: React.ReactNode;
  innerRef?: React.RefObject<HTMLDivElement>;
} & ScrollbarsStyledProps;

const ScrollbarStyled =
  styled.div<{ autoHorizontalPadding: boolean; isOverflowing: boolean, hideXscrollbar?: boolean }>`
  ${scrollbars}

  ${({
    autoHorizontalPadding,
    isOverflowing,
    theme: {
      scrollbars: { width },
    },
  }) =>
    autoHorizontalPadding &&
    `
    padding-left: ${width.track}px;
    padding-right: ${isOverflowing ? 0 : width.track}px;
  `};
`;

function Scrollbar(
  { autoHorizontalPadding, children, hideXscrollbar, innerRef: innerRefProp, ...props }: ScrollbarProps,
  ref: React.RefObject<HTMLDivElement>,
) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const innerRefInternal = useRef<HTMLDivElement>(null);
  const outterRef = useRef<HTMLDivElement>(null);
  const innerRef = innerRefProp || innerRefInternal;

  useEffect(() => {
    if (autoHorizontalPadding) {
      const checkOverflow = () => {
        if (innerRef.current) {
          const rect = innerRef?.current?.getBoundingClientRect();
          const outter = (ref?.current ?? outterRef?.current)?.getBoundingClientRect();
          const hasOverflow = rect?.height > outter?.height;
          setIsOverflowing(hasOverflow);
        }
      };

      const resizeObserver = new ResizeObserver(checkOverflow);

      if (innerRef.current) {
        resizeObserver.observe(innerRef.current);
      }

      // Initial check for overflow
      checkOverflow();

      // Clean up the observer on unmount
      const inner = innerRef.current;
      return () => {
        if (inner) {
          resizeObserver.unobserve(inner);
        }
      };
    }
  }, [autoHorizontalPadding, children, ref]); // Re-run whenever children change

  return (
    <ScrollbarStyled
      {...props}
      autoHorizontalPadding={autoHorizontalPadding}
      hideXscrollbar={hideXscrollbar}
      isOverflowing={isOverflowing}
      onWheel={(e) => {
        e.stopPropagation();
      }}
      ref={ref || outterRef}
    >
      <InnerStyled ref={innerRef}>
        {children}
        </InnerStyled>
    </ScrollbarStyled>
  );
}

export default forwardRef(Scrollbar);