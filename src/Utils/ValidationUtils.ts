import bcrypt from "bcrypt";
import UserRepository from "../repository/UserRepository";

class ValidationUtils {
  public async emailExist(email: string): Promise<boolean> {
    try {
      let userRepository: UserRepository = new UserRepository();

      let selectedMail: string | null = await userRepository.findByEmail(email);

      return (selectedMail !== null && selectedMail.trim() !== "");
    } catch (error) {
      throw error;
    }
  }

  public isEmailValid(email: string): boolean {
    try {
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  public async passwordHasher(password: string): Promise<string> {
    try {
      let rounds: number = 10;
      return bcrypt.hash(password, rounds);
    } catch (error) {
      throw error;
    }
  }

  public async passwordCompare(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      throw error;
    }
  }
}

export default ValidationUtils;
