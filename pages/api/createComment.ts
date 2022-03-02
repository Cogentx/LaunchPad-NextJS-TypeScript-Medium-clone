// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@sanity/client';
import { IFormInput } from '../../typings';

type Data = {
  message: string;
  error?: any;
};

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id, name, email, comment } = JSON.parse(req.body) as IFormInput;

  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Counld not submit comment', error });
  }

  console.log('Comment Saved! Thank you!');

  return res.status(200).json({ message: 'Comment Saved! Thank you!' });
}
