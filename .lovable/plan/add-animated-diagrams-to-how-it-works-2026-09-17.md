# Add animated diagrams to How It Works

## Goal
Place the three supplied animated diagrams beneath their matching Driver, Charging Partner, and Distribution Partner text without the diagrams’ original background panels.

## What will change
- Rebuild the supplied diagrams as one responsive website component so they inherit the page typography and section backgrounds.
- Keep the original labels, icon sequence, connecting lines, and moving flow indicators.
- Add the Driver diagram beneath “The Driver”, the charging flow beneath “The Charging Partner”, and the API flow beneath “The Distribution Partner”.
- Adapt the diagrams for narrow screens with a compact vertical flow while preserving the horizontal desktop presentation.
- Respect reduced-motion settings by showing a clear static state.

## Technical details
- Use lightweight React and CSS animation rather than embedding the supplied editor files or their black preview frame.
- Use existing semantic colours, borders, shadows, and type styles.
- Validate the page at desktop, tablet, and mobile sizes.
