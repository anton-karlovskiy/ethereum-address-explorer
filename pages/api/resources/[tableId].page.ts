import {
  NextApiRequest,
  NextApiResponse
} from 'next';

const CACHE_SECONDS = 300;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.setHeader(
      'Cache-Control',
      `s-maxage=${2 * CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS}`
    );

    res.json({
      success: true,
      statusCode: 200,
      value: 'dummy'
    });
  } catch (error: unknown) {
    res
      .status(500)
      .json({
        success: false,
        statusCode: 500,
        message:
          error instanceof Error ?
            error.message :
            String(error)
      });
  }
};

export default handler;
