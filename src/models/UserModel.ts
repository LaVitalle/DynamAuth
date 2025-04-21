class User {
  private id: string | number | null | undefined;
  private name: string | null | undefined;
  private password: string;
  private email: string;
  private create_at: Date | null | undefined;
  private updated_at: Date | null | undefined;

  constructor(
    email: string,
    password: string,
    name?: string,
    id?: string | number | null,
    create_at?: Date | null | undefined,
    updated_at?: Date | null | undefined
  ) {
    this.email = email;
    this.password = password;

    if (id) {
      this.id = id;
    }
    if (create_at) {
      this.create_at = create_at;
    }
    if (updated_at) {
      this.updated_at = updated_at;
    }
    if (name) {
      this.name = name;
    }
  }

  public getEmail(): string {
    try {
      return this.email;
    } catch (error) {
      throw new Error(
        "It was not possible to recover the email because: " + error
      );
    }
  }

  public getPassword(): string {
    try {
      return this.password;
    } catch (error) {
      throw new Error(
        "It was not possible to recover the password because: " + error
      );
    }
  }

  public getId(): string | number | null | undefined {
    try {
      return this.id;
    } catch (error) {
      throw new Error(
        "It was not possible to recover the user id because: " + error
      );
    }
  }

  public getName(): string | null | undefined {
    try {
      return this.name;
    } catch (error) {
      throw new Error(
        "It was not possible to recover the email because: " + error
      );
    }
  }

  public getCreateDate(): Date | null | undefined {
    try {
      return this.create_at;
    } catch (error) {
      throw new Error(
        "It was not possible to recover the email because: " + error
      );
    }
  }

  public getUpdateDate(): Date | null | undefined {
    try {
      return this.updated_at;
    } catch (error) {
      throw new Error(
        "It was not possible to recover the email because: " + error
      );
    }
  }
}

export default User;
