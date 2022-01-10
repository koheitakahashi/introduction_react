import { VFC } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";

type Props = {
  count: number;
  reset?: () => void;
  increment?: () => void;
}

const Counter: VFC<Props> = ({
  count = 0,
  reset = () => undefined,
  increment = () => undefined
}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>Count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <div className="ui tow Buttons">
        <Button color="red" onClick={reset}>
          reset
        </Button>
        <Button color="green" onClick={increment}>
          +1
        </Button>
      </div>
    </Card.Content>
  </Card>
)

export default Counter;
