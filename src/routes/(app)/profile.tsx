import { createFileRoute } from '@tanstack/react-router';
import { Calculator } from '../../components/Calculator';
import { AnotherCalculator } from '../../components/AnotherCalculator';

export const Route = createFileRoute('/(app)/profile')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AnotherCalculator />;
}
