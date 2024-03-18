import * as dotenv from "dotenv";
dotenv.config();

interface RedshieldResponse {
  status: boolean;
  message: string;
  project: any;
  redKey?: undefined;
}

class Redshield {
  private static instance: Redshield;
  private redKey: string | undefined;

  private constructor() {
    this.redKey = process.env.RED_KEY;
    if (!this.redKey) {
      // throw new Error('RED_KEY environment variable is not set');
      console.log("RED_KEY environment variable is not");
    }
  }

  public static getInstance(): Redshield {
    if (!Redshield.instance) {
      Redshield.instance = new Redshield();
    }
    return Redshield.instance;
  }

  public async getProject(): Promise<RedshieldResponse> {
    // Fetch data from the API using this.redKey
    // ...
    // Return the response object
    return {
      status: true,
      message: "Data fetched successfully",
      project: {
        /* your project data */
      },
    };
  }
}

export default Redshield.getInstance();
