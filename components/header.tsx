"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="flex items-center justify-between h-32 px-4 py-4 bg-white dark:bg-gray-950 dark:text-gray-50 md:px-6">
      <Link className="flex items-center justify-center" href="/">
        <div className="w-[25vw] h-full">
          <Image
            priority
            width="160"
            height="90"
            src="/logo.svg"
            alt="hari photogenic"
          />
        </div>
        <span className="sr-only">Hari Photogenic</span>
      </Link>
      <NavigationMenu className="hidden items-center gap-6 text-sm font-medium md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/gallery" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="/about"
            >
              About
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
