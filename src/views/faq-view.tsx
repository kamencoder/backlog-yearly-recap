import React from 'react';
import { Box, Card, CardContent, Typography, Divider } from '@mui/material';

const FAQView: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 900, margin: 'auto', padding: 2 }} id="faq-view">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>FAQ</Typography>

          <Typography variant="h6" gutterBottom>1. What data do I need to enter for this to work?</Typography>
          <Typography variant="body2" paragraph>
            The app needs your game entries with at least the following to produce the yearly summary:
            - A title/name for the game.
            - A completion date in the year you want to analyze (the app reads the "Completion Date" and derives the month).
            - A completion status that indicates the game is finished (for this app, values like "Beaten" or "Completed" are counted).
            - If you want playtime shown, provide playtime (the app expects playtime in minutes in the CSV or the field the importer maps to).
          </Typography>
          {/* TODO: Fill in the exact CSV column names and formats the importer expects (e.g., "Completion Date", "Completion", "Play Time" and whether play time is minutes or hours). */}

          <Divider sx={{ my: 1 }} />

          <Typography variant="h6" gutterBottom>2. Why is the amount spent different than when I do a SUM on the "Amount Paid" column in the CSV file?</Typography>
          <Typography variant="body2" paragraph>
            There are a few common reasons the displayed amount may differ from a raw SUM of a CSV column:
            - The app may deduplicate or ignore certain records (e.g., refunds, duplicates, or entries without a valid game link).
            - Bundled purchases may be split across multiple games or aggregated differently than a raw sum.
            - Currency conversion or normalization may change values if your CSV contains mixed currencies.
          </Typography>
          {/* TODO: If you want a precise explanation for your dataset, add a sample of your purchase-related CSV columns (e.g., column names and a few rows) so I can show exactly how the app aggregates them. */}

          <Divider sx={{ my: 1 }} />

          <Typography variant="h6" gutterBottom>3. Why can't I see games that I replayed this year?</Typography>
          <Typography variant="body2" paragraph>
            The summary focuses on games that were finished (completed/beaten) this year based on the "Completion Date" recorded for each game. If a replay did not update the completion date or the game entry is not marked as finished again, it won't be counted as a new completion.

            If you want replays to show up as separate completions, update the game's completion date to the replay date, or add a separate entry that represents the replay.
          </Typography>
          {/* TODO: If you prefer automatic replay detection (e.g., counting multiple completions per game), describe how you'd like replays tracked and I can sketch an implementation. */}

          <Divider sx={{ my: 1 }} />

          <Typography variant="h6" gutterBottom>4. Why doesn't this use the Date Added or Date Updated fields from the CSV?</Typography>
          <Typography variant="body2" paragraph>
            Those fields are not currently used for the yearly completion and playtime metrics. The app intentionally uses the "Completion Date" because the main goal is to report on games finished within a specific year and month.

            "Date Added" and "Date Updated" can be useful for other analyses (e.g., import history or recently changed records), but they're not part of the completion metrics right now.
          </Typography>
          {/* TODO: If you want the app to use "Date Added" or "Date Updated" for any specific views or filters, tell me which view and I'll add that feature. */}

        </CardContent>
      </Card>
    </Box>
  );
}

export default FAQView;
