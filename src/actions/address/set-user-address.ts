"use server";

import type { Address } from "@/interfaces";
import prisma from "@/lib/prisma";

export const setUserAddress = async (address: Address, userId: string) => {
  try {
    const newAddress = await createOrReplaceUserAddress(address, userId);
    return {
      ok: true,
      address: newAddress,
    };
  } catch (error) {
    console.log("Error in setUserAddress", error);
    return {
      ok: false,
      message: "Error in setUserAddress",
    };
  }
};

const createOrReplaceUserAddress = async (address: Address, userId: string) => {
  try {
    const storedAddress = await prisma?.userAddress.findUnique({
      where: {
        userId,
      },
    });

    const addressToSave = {
      userId: userId,
      address: address.address,
      address2: address.address2,
      countryId: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      zipCode: address.zipCode,
    };

    if (!storedAddress) {
      const newAddress = await prisma?.userAddress.create({
        data: addressToSave,
      });
      return newAddress;
    }
    const updatedAddress = await prisma?.userAddress.update({
      where: {
        userId,
      },
      data: addressToSave,
    });
    return updatedAddress;
  } catch (error) {
    console.error("Error in createOrReplaceUserAddress", error);
  }
};
