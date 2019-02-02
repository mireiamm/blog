import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export const Article = styled.article``;
export const Text = styled.span``;
export const Small = styled.small`
  color: ${({ theme }) => theme.textMuted};
`;
export const Bold = styled.strong``;
export const Block = styled.div``;
export const Paragraph = styled.p`
  line-height: 1.5;
`;
export const Code = styled.pre`
  margin: 0;
  background: ${({ theme }) => theme.mutedBackground};
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.mutedBorder};
  border-radius: 2px;
  line-height: 1.3;
`;
export const InlineCode = styled.span`
  margin: 0;
  background: ${({ theme }) => theme.mutedBackground};
  padding: 0 3px;
  border: 1px solid ${({ theme }) => theme.mutedBorder};
  border-radius: 2px;
  line-height: 1.2;
  font-family: monospace;
`;
export const TextLink = styled(OutboundLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: underline;
  }
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  margin: auto;
`;
export const List = styled.ul`
  line-height: 1.3;
  padding-left: 2em;
`;
export const OrderedList = styled(List).attrs({ as: 'ol' })``;
export const ListItem = styled.li``;
export const Break = styled.hr`
  max-width: 6em;
  margin: 3em auto;
`;
export const Quote = styled.blockquote`
  padding-left: 1.5em;
  border-left: 2px solid ${({ theme }) => theme.mutedBorder};
  margin: 0 0 0 1em;
  font-style: italic;
  display: inline-block;
`;

const titleFont = "font-family: 'lato', 'arial', sans-serif";

export const Title = styled.h1`
  ${titleFont};
`;
export const Subtitle = styled.div`
  ${titleFont};
`;
export const Heading = styled.h2`
  ${titleFont};
`;
export const Subheading = styled.h3`
  ${titleFont};
`;
export const H3 = styled.h3`
  ${titleFont};
`;
export const H4 = styled.h4`
  ${titleFont};
`;
export const H5 = styled.h5`
  ${titleFont};
`;
export const H6 = styled.h6`
  ${titleFont};
`;

export const Iframe = styled.iframe``;
