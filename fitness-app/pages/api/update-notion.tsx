import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: `${process.env.MY_NOTION_TOKEN}`,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ensure the request method is POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Ensure that req.body exists and contains an email property
    if (!req.body || !req.body.email) {
      return res.status(400).json({ error: 'Missing email in request body' });
    }

    // Perform the Notion API request
    await notion.pages.create({
      parent: {
        database_id: `${process.env.DATABASE_ID}`,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: `${req.body.email}`,
              },
            },
          ],
        },
      },
    });

    // If the request is successful, return a success response
    return res.status(200).json({ status: 'success' });
  } catch (err) {
    // Log any unexpected errors
    console.error('Error:', err);

    // Return a generic error response
    return res.status(500).json({ error: 'An error occurred' });
  }
}
