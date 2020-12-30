import express from 'express';
import * as H5P from '../src';
/**
 * @param h5pEditor
 * @param h5pPlayer
 * @param languageOverride the language to use. Set it to 'auto' to use the
 * language set by a language detector in the req.language property.
 * (recommended)
 */
export default function (h5pEditor: H5P.H5PEditor, h5pPlayer: H5P.H5PPlayer, languageOverride?: string | 'auto'): express.Router;
