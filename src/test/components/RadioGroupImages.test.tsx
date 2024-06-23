import React from "react";
import { render, screen } from "@testing-library/react"
import { RadioGroupImages } from "@/components/RadioGroupImages"
import { EImageType } from "image-conversion";
import { beforeEach, describe, expect, it, vi } from "vitest"
import userEvent from '@testing-library/user-event';

describe('Radio group images types', () => {
  const formatToConvert: EImageType | undefined = undefined;
  const mockSetFormatToConvert = vi.fn().mockImplementation((value: EImageType) => value);


  beforeEach(() => {
    render(
      <RadioGroupImages
        formatToConvert={formatToConvert}
        setFormatToConvert={mockSetFormatToConvert}
      />
    )
  })

  it('Should show component', () => {
    const labels = screen.queryAllByRole('label');
    // console.log(labels[0]);
    expect(labels).toHaveLength(3);
    expect(labels[0].textContent).toBe('PNG');
    expect(labels[1].textContent).toBe('JPEG');
    expect(labels[2].textContent).toBe('GIF');
  })
  it('Should show default button state', async() => {
    const radioButtons = screen.queryAllByRole('radio');
    expect(radioButtons[0].ariaChecked).toBe('false');
    expect(radioButtons[1].ariaChecked).toBe('false');
    expect(radioButtons[2].ariaChecked).toBe('false');
  });
  it('Should select an option', async() => {
    const radioButtons = screen.queryAllByRole('radio');
    const optionPNG = radioButtons[0];
    expect(radioButtons[0].ariaChecked).toBe('false');
    await userEvent.click(optionPNG);
    expect(radioButtons[0].ariaChecked).toBe('true');
    expect(mockSetFormatToConvert).toHaveBeenCalledOnce();
  });
})