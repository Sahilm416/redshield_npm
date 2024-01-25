"use server";



export const getEnv = async () => {
  return process.env.Red_key!;
};

export const getProject = async () => {
  try {
    const key = await getEnv();
    if (!key) {
      throw new Error("please provide a key");
    }
    const res = await fetch(
      "https://redshield.vercel.app/api/service/getProject",
      {
        headers: {
          Authorization: key,
        },
      }
    );

    const response = await res.json();

    if (response.status) {
      return {
        status: true,
        project_name: response.project_name,
        project_id: response.project_id,
      };
    }
    return {
      status: false,
      message: response.message,
    };
  } catch (error) {
    console.log(error);
  }
};
export const resetPassword = async () => {};
