/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | null;
type InputMaybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
  PrismicStructuredText: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};

type DirectorySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'changeTime'
  | 'childImageSharp.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.id'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.original.width'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'children'
  | 'childrenImageSharp'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'publicURL'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};

type FileSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type IDQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['ID']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly ne: InputMaybe<Scalars['ID']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
};

type ImageCropFocus =
  | 17
  | 0
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | ''
  | 'avif'
  | 'jpg'
  | ''
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'fixed.aspectRatio'
  | 'fixed.base64'
  | 'fixed.height'
  | 'fixed.originalName'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcSetWebp'
  | 'fixed.srcWebp'
  | 'fixed.tracedSVG'
  | 'fixed.width'
  | 'fluid.aspectRatio'
  | 'fluid.base64'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationHeight'
  | 'fluid.presentationWidth'
  | 'fluid.sizes'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcSetWebp'
  | 'fluid.srcWebp'
  | 'fluid.tracedSVG'
  | 'gatsbyImageData'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'original.height'
  | 'original.src'
  | 'original.width'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'resize.aspectRatio'
  | 'resize.height'
  | 'resize.originalName'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width';

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ImgixFixed = {
  readonly base64: Scalars['String'];
  readonly height: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly width: Scalars['Int'];
};

type ImgixFixedFilterInput = {
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImgixFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly srcWebp: Scalars['String'];
};

type ImgixFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
};

type ImgixParamsInput = {
  /** Alias for `pdfAnnotation`. */
  readonly annotation: InputMaybe<Scalars['Boolean']>;
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  readonly ar: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  readonly auto: InputMaybe<Scalars['String']>;
  /** Alias for `blend`. */
  readonly b: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly ba: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  readonly balph: InputMaybe<Scalars['Int']>;
  /** Alias for `blendCrop`. */
  readonly bc: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly bf: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  readonly bg: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  readonly bh: InputMaybe<Scalars['Float']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  readonly blend: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  readonly blendAlign: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  readonly blendAlpha: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  readonly blendClr: InputMaybe<Scalars['String']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  readonly blendColor: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  readonly blendCrop: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  readonly blendFit: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  readonly blendH: InputMaybe<Scalars['Float']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  readonly blendMode: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  readonly blendPad: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  readonly blendSize: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  readonly blendW: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  readonly blendX: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  readonly blendY: InputMaybe<Scalars['Int']>;
  /** Alias for `blendAlign`. */
  readonly blendalign: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  readonly blendalpha: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  readonly blendclr: InputMaybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendcolor: InputMaybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly blendcrop: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly blendfit: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  readonly blendh: InputMaybe<Scalars['Float']>;
  /** Alias for `blendMode`. */
  readonly blendmode: InputMaybe<Scalars['String']>;
  /** Alias for `blendPad`. */
  readonly blendpad: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  readonly blendsize: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  readonly blendw: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  readonly blendx: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly blendy: InputMaybe<Scalars['Int']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  readonly blur: InputMaybe<Scalars['Int']>;
  /** Alias for `blendMode`. */
  readonly bm: InputMaybe<Scalars['String']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  readonly border: InputMaybe<Scalars['String']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  readonly borderBottom: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  readonly borderLeft: InputMaybe<Scalars['Int']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  readonly borderRadius: InputMaybe<Scalars['String']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  readonly borderRadiusInner: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  readonly borderRight: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  readonly borderTop: InputMaybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly bp: InputMaybe<Scalars['Int']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  readonly bri: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  readonly bs: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  readonly bw: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  readonly bx: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly by: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  readonly ch: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  readonly chromasub: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  readonly colorquant: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  readonly colors: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  readonly con: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  readonly cornerRadius: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  readonly crop: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  readonly cs: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  readonly dl: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  readonly dpi: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  readonly dpr: InputMaybe<Scalars['Float']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  readonly duotone: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  readonly duotoneAlpha: InputMaybe<Scalars['Int']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  readonly exp: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  readonly expires: InputMaybe<Scalars['String']>;
  /** Alias for `fit`. */
  readonly f: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  readonly faceindex: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  readonly facepad: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  readonly faces: InputMaybe<Scalars['Int']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  readonly fill: InputMaybe<Scalars['String']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  readonly fillColor: InputMaybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  readonly fillcolor: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  readonly fit: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  readonly flip: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  readonly fm: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  readonly fpDebug: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  readonly fpX: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  readonly fpY: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  readonly fpZ: InputMaybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  readonly gam: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  readonly gridColors: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  readonly gridSize: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  readonly h: InputMaybe<Scalars['Float']>;
  /** Alias for `h`. */
  readonly height: InputMaybe<Scalars['Float']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  readonly high: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  readonly htn: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  readonly hue: InputMaybe<Scalars['Int']>;
  /** Alias for `invert`. */
  readonly inv: InputMaybe<Scalars['Boolean']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  readonly invert: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. */
  readonly iptc: InputMaybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  /** Alias for `mark`. */
  readonly m: InputMaybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly ma: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  readonly malph: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  readonly mark: InputMaybe<Scalars['String']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  readonly markAlign: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  readonly markAlpha: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  readonly markBase: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  readonly markFit: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  readonly markH: InputMaybe<Scalars['Float']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  readonly markPad: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  readonly markRot: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  readonly markScale: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  readonly markTile: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  readonly markW: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  readonly markX: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  readonly markY: InputMaybe<Scalars['Int']>;
  /** Alias for `markAlign`. */
  readonly markalign: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  readonly markalpha: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  readonly markbase: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly markfit: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  readonly markh: InputMaybe<Scalars['Float']>;
  /** Alias for `markPad`. */
  readonly markpad: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly markscale: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  readonly marktile: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  readonly markw: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  readonly markx: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly marky: InputMaybe<Scalars['Int']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  readonly mask: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  readonly maskBg: InputMaybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  readonly maskbg: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  readonly maxH: InputMaybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  readonly maxHeight: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  readonly maxW: InputMaybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  readonly maxWidth: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  readonly mb: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly mf: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  readonly mh: InputMaybe<Scalars['Float']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  readonly minH: InputMaybe<Scalars['Int']>;
  /** Alias for `minH`. */
  readonly minHeight: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  readonly minW: InputMaybe<Scalars['Int']>;
  /** Alias for `minW`. */
  readonly minWidth: InputMaybe<Scalars['Int']>;
  /** Alias for `monochrome`. */
  readonly mono: InputMaybe<Scalars['String']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  readonly monochrome: InputMaybe<Scalars['String']>;
  /** Alias for `markPad`. */
  readonly mp: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly ms: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  readonly mtile: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  readonly mw: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  readonly mx: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly my: InputMaybe<Scalars['Int']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  readonly nr: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  readonly nrs: InputMaybe<Scalars['Int']>;
  /** Alias for `orient`. */
  readonly or: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  readonly orient: InputMaybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  readonly pad: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  readonly padBottom: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  readonly padLeft: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  readonly padRight: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  readonly padTop: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  readonly page: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  readonly palette: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  readonly pdfAnnotation: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  readonly prefix: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  readonly px: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  readonly q: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  readonly rect: InputMaybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  readonly rot: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  readonly sat: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  readonly sepia: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  readonly shad: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  readonly sharp: InputMaybe<Scalars['Float']>;
  /** Alias for `txt`. */
  readonly t: InputMaybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly ta: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly tc: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly tcl: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly tf: InputMaybe<Scalars['String']>;
  /** Alias for `txtLine`. */
  readonly tl: InputMaybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly tp: InputMaybe<Scalars['Int']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  readonly transparency: InputMaybe<Scalars['String']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  readonly trim: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  readonly trimColor: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  readonly trimMd: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  readonly trimPad: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  readonly trimSd: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  readonly trimTol: InputMaybe<Scalars['Float']>;
  /** Alias for `trimColor`. */
  readonly trimcolor: InputMaybe<Scalars['String']>;
  /** Alias for `trimMd`. */
  readonly trimmd: InputMaybe<Scalars['Float']>;
  /** Alias for `trimPad`. */
  readonly trimpad: InputMaybe<Scalars['Int']>;
  /** Alias for `trimSd`. */
  readonly trimsd: InputMaybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  readonly trimtol: InputMaybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly tsh: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  readonly tsz: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly tt: InputMaybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  readonly txt: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  readonly txtAlign: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  readonly txtClip: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtClr: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  readonly txtColor: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  readonly txtFit: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  readonly txtFont: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  readonly txtLead: InputMaybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  readonly txtLig: InputMaybe<Scalars['Int']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  readonly txtLine: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  readonly txtLineClr: InputMaybe<Scalars['String']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  readonly txtLineColor: InputMaybe<Scalars['String']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  readonly txtPad: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  readonly txtShad: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  readonly txtSize: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  readonly txtTrack: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  readonly txtWidth: InputMaybe<Scalars['Int']>;
  /** Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-x). */
  readonly txtX: InputMaybe<Scalars['Int']>;
  /** Sets the vertical (y) position of the text in pixels relative to the top edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-y). */
  readonly txtY: InputMaybe<Scalars['Int']>;
  /** Alias for `txtAlign`. */
  readonly txtalign: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly txtclip: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtclr: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtcolor: InputMaybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  readonly txtfit: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly txtfont: InputMaybe<Scalars['String']>;
  /** Alias for `txtLead`. */
  readonly txtlead: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  readonly txtlig: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly txtline: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  readonly txtlineclr: InputMaybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlinecolor: InputMaybe<Scalars['String']>;
  /** Alias for `txtPad`. */
  readonly txtpad: InputMaybe<Scalars['Int']>;
  /** Alias for `txtShad`. */
  readonly txtshad: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  readonly txtsize: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly txttrack: InputMaybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  readonly txtwidth: InputMaybe<Scalars['Int']>;
  /** Alias for `txtX`. */
  readonly txtx: InputMaybe<Scalars['Int']>;
  /** Alias for `txtY`. */
  readonly txty: InputMaybe<Scalars['Int']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  readonly usm: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  readonly usmrad: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  readonly vib: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  readonly w: InputMaybe<Scalars['Float']>;
  /** Alias for `w`. */
  readonly width: InputMaybe<Scalars['Float']>;
};

type ImgixPlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none';

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

type MarkdownExcerptFormats =
  | 'HTML'
  | 'MARKDOWN'
  | 'PLAIN';

type MarkdownHeading = {
  readonly depth: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type MarkdownHeadingFilterInput = {
  readonly depth: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly value: InputMaybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: InputMaybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownRemark = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
};


type MarkdownRemark_excerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading: InputMaybe<Scalars['String']>;
  maxDepth: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'excerpt'
  | 'excerptAst'
  | 'headings'
  | 'headings.depth'
  | 'headings.id'
  | 'headings.value'
  | 'html'
  | 'htmlAst'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words';

type MarkdownRemarkFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly excerptAst: InputMaybe<JSONQueryOperatorInput>;
  readonly headings: InputMaybe<MarkdownHeadingFilterListInput>;
  readonly html: InputMaybe<StringQueryOperatorInput>;
  readonly htmlAst: InputMaybe<JSONQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly tableOfContents: InputMaybe<StringQueryOperatorInput>;
  readonly timeToRead: InputMaybe<IntQueryOperatorInput>;
  readonly wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: InputMaybe<IntQueryOperatorInput>;
  readonly sentences: InputMaybe<IntQueryOperatorInput>;
  readonly words: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type PrismicAllDocumentTypes = PrismicPost | PrismicSocials;

type PrismicAlternateLanguageType = {
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly id: Maybe<Scalars['ID']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly raw: Maybe<Scalars['JSON']>;
  readonly type: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
};

type PrismicAlternateLanguageTypeFilterInput = {
  readonly id: InputMaybe<IDQueryOperatorInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly raw: InputMaybe<JSONQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
};

type PrismicAlternateLanguageTypeFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicAlternateLanguageTypeFilterInput>;
};

type PrismicEmbedType = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type PrismicEmbedTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicEmbedTypeConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_groupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicEmbedTypeConnection_maxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_minArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_sumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

type PrismicEmbedTypeEdge = {
  readonly next: Maybe<PrismicEmbedType>;
  readonly node: PrismicEmbedType;
  readonly previous: Maybe<PrismicEmbedType>;
};

type PrismicEmbedTypeFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type PrismicEmbedTypeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type PrismicEmbedTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicEmbedTypeGroupConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_groupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicEmbedTypeGroupConnection_maxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_minArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_sumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

type PrismicEmbedTypeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicEmbedTypeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicGeoPointType = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};

type PrismicImageDimensionsType = {
  readonly height: Scalars['Int'];
  readonly width: Scalars['Int'];
};

type PrismicImageDimensionsTypeFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type PrismicImageThumbnailType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicImageThumbnailType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicImageThumbnailType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicImageThumbnailType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicImageThumbnailType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicLinkType = {
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly id: Maybe<Scalars['ID']>;
  readonly isBroken: Maybe<Scalars['Boolean']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly link_type: Maybe<PrismicLinkTypeEnum>;
  readonly localFile: Maybe<File>;
  readonly raw: Maybe<Scalars['JSON']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly target: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicLinkTypeEnum =
  | 'Any'
  | 'Document'
  | 'Media'
  | 'Web';

type PrismicLinkTypeEnumQueryOperatorInput = {
  readonly eq: InputMaybe<PrismicLinkTypeEnum>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<PrismicLinkTypeEnum>>>;
  readonly ne: InputMaybe<PrismicLinkTypeEnum>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<PrismicLinkTypeEnum>>>;
};

type PrismicLinkTypeFilterInput = {
  readonly id: InputMaybe<IDQueryOperatorInput>;
  readonly isBroken: InputMaybe<BooleanQueryOperatorInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly link_type: InputMaybe<PrismicLinkTypeEnumQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly raw: InputMaybe<JSONQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly target: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicPost = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicPostDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly uid: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicPost_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicPost_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicPostConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicPostEdge>;
  readonly group: ReadonlyArray<PrismicPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicPostConnection_distinctArgs = {
  field: PrismicPostFieldsEnum;
};


type PrismicPostConnection_groupArgs = {
  field: PrismicPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicPostConnection_maxArgs = {
  field: PrismicPostFieldsEnum;
};


type PrismicPostConnection_minArgs = {
  field: PrismicPostFieldsEnum;
};


type PrismicPostConnection_sumArgs = {
  field: PrismicPostFieldsEnum;
};

type PrismicPostDataImagepreviewImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicPostDataImagepreviewImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicPostDataImagepreviewImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicPostDataImagepreviewImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicPostDataImagepreviewImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicPostDataImagepreviewImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicPostDataType = {
  readonly body: Maybe<PrismicStructuredTextType>;
  readonly createdat: Maybe<Scalars['Date']>;
  readonly imagepreview: Maybe<PrismicPostDataImagepreviewImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};


type PrismicPostDataType_createdatArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicPostDataTypeFilterInput = {
  readonly body: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly createdat: InputMaybe<DateQueryOperatorInput>;
  readonly imagepreview: InputMaybe<PrismicPostDataImagepreviewImageTypeFilterInput>;
  readonly title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicPostEdge = {
  readonly next: Maybe<PrismicPost>;
  readonly node: PrismicPost;
  readonly previous: Maybe<PrismicPost>;
};

type PrismicPostFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.body.html'
  | 'data.body.raw'
  | 'data.body.richText'
  | 'data.body.text'
  | 'data.createdat'
  | 'data.imagepreview.alt'
  | 'data.imagepreview.copyright'
  | 'data.imagepreview.dimensions.height'
  | 'data.imagepreview.dimensions.width'
  | 'data.imagepreview.fixed.base64'
  | 'data.imagepreview.fixed.height'
  | 'data.imagepreview.fixed.sizes'
  | 'data.imagepreview.fixed.src'
  | 'data.imagepreview.fixed.srcSet'
  | 'data.imagepreview.fixed.srcSetWebp'
  | 'data.imagepreview.fixed.srcWebp'
  | 'data.imagepreview.fixed.width'
  | 'data.imagepreview.fluid.aspectRatio'
  | 'data.imagepreview.fluid.base64'
  | 'data.imagepreview.fluid.sizes'
  | 'data.imagepreview.fluid.src'
  | 'data.imagepreview.fluid.srcSet'
  | 'data.imagepreview.fluid.srcSetWebp'
  | 'data.imagepreview.fluid.srcWebp'
  | 'data.imagepreview.gatsbyImageData'
  | 'data.imagepreview.localFile.absolutePath'
  | 'data.imagepreview.localFile.accessTime'
  | 'data.imagepreview.localFile.atime'
  | 'data.imagepreview.localFile.atimeMs'
  | 'data.imagepreview.localFile.base'
  | 'data.imagepreview.localFile.birthTime'
  | 'data.imagepreview.localFile.birthtime'
  | 'data.imagepreview.localFile.birthtimeMs'
  | 'data.imagepreview.localFile.blksize'
  | 'data.imagepreview.localFile.blocks'
  | 'data.imagepreview.localFile.changeTime'
  | 'data.imagepreview.localFile.children'
  | 'data.imagepreview.localFile.childrenImageSharp'
  | 'data.imagepreview.localFile.ctime'
  | 'data.imagepreview.localFile.ctimeMs'
  | 'data.imagepreview.localFile.dev'
  | 'data.imagepreview.localFile.dir'
  | 'data.imagepreview.localFile.ext'
  | 'data.imagepreview.localFile.extension'
  | 'data.imagepreview.localFile.gid'
  | 'data.imagepreview.localFile.id'
  | 'data.imagepreview.localFile.ino'
  | 'data.imagepreview.localFile.mode'
  | 'data.imagepreview.localFile.modifiedTime'
  | 'data.imagepreview.localFile.mtime'
  | 'data.imagepreview.localFile.mtimeMs'
  | 'data.imagepreview.localFile.name'
  | 'data.imagepreview.localFile.nlink'
  | 'data.imagepreview.localFile.prettySize'
  | 'data.imagepreview.localFile.publicURL'
  | 'data.imagepreview.localFile.rdev'
  | 'data.imagepreview.localFile.relativeDirectory'
  | 'data.imagepreview.localFile.relativePath'
  | 'data.imagepreview.localFile.root'
  | 'data.imagepreview.localFile.size'
  | 'data.imagepreview.localFile.sourceInstanceName'
  | 'data.imagepreview.localFile.uid'
  | 'data.imagepreview.url'
  | 'data.title.html'
  | 'data.title.raw'
  | 'data.title.richText'
  | 'data.title.text'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'uid'
  | 'url';

type PrismicPostFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicPostDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicPostGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicPostEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicPostGroupConnection_distinctArgs = {
  field: PrismicPostFieldsEnum;
};


type PrismicPostGroupConnection_groupArgs = {
  field: PrismicPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicPostGroupConnection_maxArgs = {
  field: PrismicPostFieldsEnum;
};


type PrismicPostGroupConnection_minArgs = {
  field: PrismicPostFieldsEnum;
};


type PrismicPostGroupConnection_sumArgs = {
  field: PrismicPostFieldsEnum;
};

type PrismicPostSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicPostFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicSharedSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
  readonly variation: Scalars['String'];
  readonly version: Scalars['String'];
};

type PrismicSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicSocials = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicSocialsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicSocials_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicSocials_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicSocialsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicSocialsEdge>;
  readonly group: ReadonlyArray<PrismicSocialsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicSocials>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicSocialsConnection_distinctArgs = {
  field: PrismicSocialsFieldsEnum;
};


type PrismicSocialsConnection_groupArgs = {
  field: PrismicSocialsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicSocialsConnection_maxArgs = {
  field: PrismicSocialsFieldsEnum;
};


type PrismicSocialsConnection_minArgs = {
  field: PrismicSocialsFieldsEnum;
};


type PrismicSocialsConnection_sumArgs = {
  field: PrismicSocialsFieldsEnum;
};

type PrismicSocialsDataIconImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicSocialsDataIconImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicSocialsDataIconImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicSocialsDataIconImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicSocialsDataIconImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicSocialsDataIconImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicSocialsDataType = {
  readonly icon: Maybe<PrismicSocialsDataIconImageType>;
  readonly link: Maybe<PrismicLinkType>;
  readonly title: Maybe<Scalars['String']>;
};

type PrismicSocialsDataTypeFilterInput = {
  readonly icon: InputMaybe<PrismicSocialsDataIconImageTypeFilterInput>;
  readonly link: InputMaybe<PrismicLinkTypeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type PrismicSocialsEdge = {
  readonly next: Maybe<PrismicSocials>;
  readonly node: PrismicSocials;
  readonly previous: Maybe<PrismicSocials>;
};

type PrismicSocialsFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.icon.alt'
  | 'data.icon.copyright'
  | 'data.icon.dimensions.height'
  | 'data.icon.dimensions.width'
  | 'data.icon.fixed.base64'
  | 'data.icon.fixed.height'
  | 'data.icon.fixed.sizes'
  | 'data.icon.fixed.src'
  | 'data.icon.fixed.srcSet'
  | 'data.icon.fixed.srcSetWebp'
  | 'data.icon.fixed.srcWebp'
  | 'data.icon.fixed.width'
  | 'data.icon.fluid.aspectRatio'
  | 'data.icon.fluid.base64'
  | 'data.icon.fluid.sizes'
  | 'data.icon.fluid.src'
  | 'data.icon.fluid.srcSet'
  | 'data.icon.fluid.srcSetWebp'
  | 'data.icon.fluid.srcWebp'
  | 'data.icon.gatsbyImageData'
  | 'data.icon.localFile.absolutePath'
  | 'data.icon.localFile.accessTime'
  | 'data.icon.localFile.atime'
  | 'data.icon.localFile.atimeMs'
  | 'data.icon.localFile.base'
  | 'data.icon.localFile.birthTime'
  | 'data.icon.localFile.birthtime'
  | 'data.icon.localFile.birthtimeMs'
  | 'data.icon.localFile.blksize'
  | 'data.icon.localFile.blocks'
  | 'data.icon.localFile.changeTime'
  | 'data.icon.localFile.children'
  | 'data.icon.localFile.childrenImageSharp'
  | 'data.icon.localFile.ctime'
  | 'data.icon.localFile.ctimeMs'
  | 'data.icon.localFile.dev'
  | 'data.icon.localFile.dir'
  | 'data.icon.localFile.ext'
  | 'data.icon.localFile.extension'
  | 'data.icon.localFile.gid'
  | 'data.icon.localFile.id'
  | 'data.icon.localFile.ino'
  | 'data.icon.localFile.mode'
  | 'data.icon.localFile.modifiedTime'
  | 'data.icon.localFile.mtime'
  | 'data.icon.localFile.mtimeMs'
  | 'data.icon.localFile.name'
  | 'data.icon.localFile.nlink'
  | 'data.icon.localFile.prettySize'
  | 'data.icon.localFile.publicURL'
  | 'data.icon.localFile.rdev'
  | 'data.icon.localFile.relativeDirectory'
  | 'data.icon.localFile.relativePath'
  | 'data.icon.localFile.root'
  | 'data.icon.localFile.size'
  | 'data.icon.localFile.sourceInstanceName'
  | 'data.icon.localFile.uid'
  | 'data.icon.url'
  | 'data.link.id'
  | 'data.link.isBroken'
  | 'data.link.lang'
  | 'data.link.link_type'
  | 'data.link.localFile.absolutePath'
  | 'data.link.localFile.accessTime'
  | 'data.link.localFile.atime'
  | 'data.link.localFile.atimeMs'
  | 'data.link.localFile.base'
  | 'data.link.localFile.birthTime'
  | 'data.link.localFile.birthtime'
  | 'data.link.localFile.birthtimeMs'
  | 'data.link.localFile.blksize'
  | 'data.link.localFile.blocks'
  | 'data.link.localFile.changeTime'
  | 'data.link.localFile.children'
  | 'data.link.localFile.childrenImageSharp'
  | 'data.link.localFile.ctime'
  | 'data.link.localFile.ctimeMs'
  | 'data.link.localFile.dev'
  | 'data.link.localFile.dir'
  | 'data.link.localFile.ext'
  | 'data.link.localFile.extension'
  | 'data.link.localFile.gid'
  | 'data.link.localFile.id'
  | 'data.link.localFile.ino'
  | 'data.link.localFile.mode'
  | 'data.link.localFile.modifiedTime'
  | 'data.link.localFile.mtime'
  | 'data.link.localFile.mtimeMs'
  | 'data.link.localFile.name'
  | 'data.link.localFile.nlink'
  | 'data.link.localFile.prettySize'
  | 'data.link.localFile.publicURL'
  | 'data.link.localFile.rdev'
  | 'data.link.localFile.relativeDirectory'
  | 'data.link.localFile.relativePath'
  | 'data.link.localFile.root'
  | 'data.link.localFile.size'
  | 'data.link.localFile.sourceInstanceName'
  | 'data.link.localFile.uid'
  | 'data.link.raw'
  | 'data.link.size'
  | 'data.link.slug'
  | 'data.link.tags'
  | 'data.link.target'
  | 'data.link.type'
  | 'data.link.uid'
  | 'data.link.url'
  | 'data.title'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicSocialsFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicSocialsDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicSocialsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicSocialsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicSocialsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicSocials>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicSocialsGroupConnection_distinctArgs = {
  field: PrismicSocialsFieldsEnum;
};


type PrismicSocialsGroupConnection_groupArgs = {
  field: PrismicSocialsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicSocialsGroupConnection_maxArgs = {
  field: PrismicSocialsFieldsEnum;
};


type PrismicSocialsGroupConnection_minArgs = {
  field: PrismicSocialsFieldsEnum;
};


type PrismicSocialsGroupConnection_sumArgs = {
  field: PrismicSocialsFieldsEnum;
};

type PrismicSocialsSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicSocialsFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicStructuredTextQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['PrismicStructuredText']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['PrismicStructuredText']>>>;
  readonly ne: InputMaybe<Scalars['PrismicStructuredText']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['PrismicStructuredText']>>>;
};

type PrismicStructuredTextType = {
  readonly html: Maybe<Scalars['String']>;
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  readonly raw: Scalars['PrismicStructuredText'];
  readonly richText: Scalars['PrismicStructuredText'];
  readonly text: Maybe<Scalars['String']>;
};

type PrismicStructuredTextTypeFilterInput = {
  readonly html: InputMaybe<StringQueryOperatorInput>;
  readonly raw: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
  readonly richText: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTypePathType = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly kind: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly path: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
};

type PrismicTypePathTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTypePathTypeConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_groupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicTypePathTypeConnection_maxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_minArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_sumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

type PrismicTypePathTypeEdge = {
  readonly next: Maybe<PrismicTypePathType>;
  readonly node: PrismicTypePathType;
  readonly previous: Maybe<PrismicTypePathType>;
};

type PrismicTypePathTypeFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'kind'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'path'
  | 'type';

type PrismicTypePathTypeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly kind: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTypePathTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTypePathTypeGroupConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_groupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicTypePathTypeGroupConnection_maxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_minArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_sumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

type PrismicTypePathTypeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicTypePathTypeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type Query = {
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly allPrismicEmbedType: PrismicEmbedTypeConnection;
  readonly allPrismicPost: PrismicPostConnection;
  readonly allPrismicSocials: PrismicSocialsConnection;
  readonly allPrismicTypePathType: PrismicTypePathTypeConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly prismicEmbedType: Maybe<PrismicEmbedType>;
  readonly prismicPost: Maybe<PrismicPost>;
  readonly prismicSocials: Maybe<PrismicSocials>;
  readonly prismicTypePathType: Maybe<PrismicTypePathType>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MarkdownRemarkSortInput>;
};


type Query_allPrismicEmbedTypeArgs = {
  filter: InputMaybe<PrismicEmbedTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicEmbedTypeSortInput>;
};


type Query_allPrismicPostArgs = {
  filter: InputMaybe<PrismicPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicPostSortInput>;
};


type Query_allPrismicSocialsArgs = {
  filter: InputMaybe<PrismicSocialsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicSocialsSortInput>;
};


type Query_allPrismicTypePathTypeArgs = {
  filter: InputMaybe<PrismicTypePathTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicTypePathTypeSortInput>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_markdownRemarkArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JSONQueryOperatorInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JSONQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};


type Query_prismicEmbedTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_prismicPostArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicPostDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicSocialsArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicSocialsDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicTypePathTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  kind: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'jsxRuntime'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pathPrefix'
  | 'polyfill'
  | 'siteMetadata.description'
  | 'siteMetadata.title'
  | 'trailingSlash';

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'functionRoute'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginName'
  | 'relativeCompiledFilePath';

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'pageContext'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'path'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.id'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.name'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.resolve'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.version';

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};

type SitePageSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version';

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PostFragment = { readonly id: string, readonly data: { readonly createdat: string | null, readonly body: { readonly html: string | null } | null, readonly imagepreview: { readonly url: string | null, readonly gatsbyImageData: any | null, readonly dimensions: { readonly width: number, readonly height: number } | null } | null, readonly title: { readonly text: string | null } | null } };

type HomePostsListQueryVariables = Exact<{ [key: string]: never; }>;


type HomePostsListQuery = { readonly allPrismicPost: { readonly nodes: ReadonlyArray<{ readonly id: string, readonly data: { readonly createdat: string | null, readonly body: { readonly html: string | null } | null, readonly imagepreview: { readonly url: string | null, readonly gatsbyImageData: any | null, readonly dimensions: { readonly width: number, readonly height: number } | null } | null, readonly title: { readonly text: string | null } | null } }> } };

type PostPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type PostPageQuery = { readonly prismicPost: { readonly id: string, readonly data: { readonly createdat: string | null, readonly body: { readonly html: string | null } | null, readonly imagepreview: { readonly url: string | null, readonly gatsbyImageData: any | null, readonly dimensions: { readonly width: number, readonly height: number } | null } | null, readonly title: { readonly text: string | null } | null } } | null };

type PostsPageQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type PostsPageQuery = { readonly allPrismicPost: { readonly nodes: ReadonlyArray<{ readonly id: string, readonly data: { readonly createdat: string | null, readonly body: { readonly html: string | null } | null, readonly imagepreview: { readonly url: string | null, readonly gatsbyImageData: any | null, readonly dimensions: { readonly width: number, readonly height: number } | null } | null, readonly title: { readonly text: string | null } | null } }> } };

type SocialButtonsQueryVariables = Exact<{ [key: string]: never; }>;


type SocialButtonsQuery = { readonly allPrismicSocials: { readonly nodes: ReadonlyArray<{ readonly data: { readonly title: string | null, readonly icon: { readonly gatsbyImageData: any | null } | null, readonly link: { readonly url: string | null } | null } }> } };


}