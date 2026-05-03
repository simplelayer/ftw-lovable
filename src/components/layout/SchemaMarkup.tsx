import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  schema: Record<string, unknown>;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
