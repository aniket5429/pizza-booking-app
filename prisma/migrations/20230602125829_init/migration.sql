-- CreateEnum
CREATE TYPE "PizzaState" AS ENUM ('OrderRecieved', 'PreparingDough', 'DoughPrepared', 'AddingToppings', 'ToppingsAdded', 'Baking', 'BakingDone', 'Serving', 'Done');

-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "state" "PizzaState" NOT NULL,
    "toppings" TEXT[],
    "timeTaken" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),
    "statusUpdateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);
